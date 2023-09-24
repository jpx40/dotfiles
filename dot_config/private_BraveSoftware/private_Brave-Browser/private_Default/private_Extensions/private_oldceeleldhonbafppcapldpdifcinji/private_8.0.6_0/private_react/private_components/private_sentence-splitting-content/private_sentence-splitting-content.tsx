import type * as React from "react";
import { useMemo, useRef, useEffect } from "react";
import { Div, Span, useI18nContext, useRootContext } from "../../index";
import CardContent from "../card-content/card-content";
import { classes } from "../../../common/utils";
import DiffComponent from "../diff/diff";
import Icon from "../icon/icon";
import { useLoadSplitSentence } from "./hooks";
import { UserForRephraseInterface } from "../../../core/Rephrasings";
import { RephraseObject } from "../../../core/Checker";
import useStopPropagation from "../../hooks/use-stop-propagation";
import { useBaseCardContext } from "../card-base/hooks";
import { isObject } from "../../../core/utils";

export interface Props {
	inhouseOnly: boolean;
	uniqueId: string;
	showRuleId: boolean;
	sentence: string;
	language: string;
	isIdle: boolean;
	user: UserForRephraseInterface | undefined;
	onSuggestionClick: (phrase: RephraseObject, shouldSelectNextError: boolean) => void;
}

const SentenceSplittingContent: React.FC<Props> = ({
	inhouseOnly,
	language,
	sentence,
	uniqueId,
	isIdle,
	user,
	showRuleId: isRuleDeveloperDebugMode,
	onSuggestionClick,
}) => {
	const { isInDOM } = useRootContext();
	const { updateCardPosition, moveCardIntoViewport } = useBaseCardContext();
	const [splitSentence, isLoading, error] = useLoadSplitSentence({
		inhouseOnly,
		language,
		sentence,
		uniqueId,
		user,
	});
	const isMissing = !isLoading && (!!error || !splitSentence);

	const handleSuggestionClick = useStopPropagation((e) => {
		if (splitSentence) {
			onSuggestionClick(splitSentence, !e.isTrusted && (e as KeyboardEvent).shiftKey);
		}
	});

	const Caption = useMemo<React.FC>(
		() =>
			function Caption() {
				const getMessage = useI18nContext();
				const { current: i18n } = useRef<
					Record<
						| "sentenceSplittingCardHeadlineApply"
						| "sentenceSplittingCardHeadlineLoading"
						| "sentenceSplittingCardHeadlineMissing"
						| "sentenceSplittingCardApplyButtonLabel",
						string
					>
				>({
					sentenceSplittingCardHeadlineApply: getMessage("sentenceSplittingCardHeadlineApply"),
					sentenceSplittingCardHeadlineLoading: getMessage("sentenceSplittingCardHeadlineLoading"),
					sentenceSplittingCardHeadlineMissing: getMessage("sentenceSplittingCardHeadlineMissing"),
					sentenceSplittingCardApplyButtonLabel: getMessage("sentenceSplittingCardApplyButtonLabel"),
				});

				const shouldShowApply = !error && !!splitSentence;

				const captionText = (() => {
					switch (true) {
						case isMissing:
							return i18n.sentenceSplittingCardHeadlineMissing;
						case isLoading:
							return i18n.sentenceSplittingCardHeadlineLoading;
						case shouldShowApply:
							return i18n.sentenceSplittingCardHeadlineApply;
						default:
							throw new Error("Invalid sentence splitting state");
					}
				})();

				return (
					<Div className="lt-comp-sentence-splitting-content__header">
						<Span
							className={classes(
								"lt-comp-sentence-splitting-content__caption",
								isLoading && "lt-comp-sentence-splitting-content__caption--loading",
								isMissing && "lt-comp-sentence-splitting-content__caption--missing"
							)}
						>
							{captionText}
						</Span>
						{shouldShowApply && (
							<Span
								className="lt-comp-sentence-splitting-content__apply"
								data-lt-tabindex="0"
								onClick={handleSuggestionClick}
							>
								{i18n.sentenceSplittingCardApplyButtonLabel} <Icon name="insert" compact />
							</Span>
						)}
					</Div>
				);
			},
		[error, splitSentence, isLoading, isMissing, handleSuggestionClick]
	);

	const Wrap = useMemo<React.FC<React.PropsWithChildren>>(
		() =>
			function Wrap({ children }) {
				return (
					<CardContent
						caption={<Caption />}
						className={classes(
							"lt-comp-sentence-splitting-content",
							isMissing && "lt-comp-sentence-splitting-content--missing"
						)}
						isLoading={isLoading}
						noPadding={true}
						isIdle={isIdle}
					>
						{children}
					</CardContent>
				);
			},
		[Caption, isMissing, isLoading, isIdle]
	);

	useEffect(() => {
		if (isInDOM && isObject(splitSentence)) {
			updateCardPosition();
		}
	}, [isInDOM, splitSentence, updateCardPosition]);

	useEffect(moveCardIntoViewport, [splitSentence, moveCardIntoViewport]);

	if (isLoading || error || !splitSentence) {
		return <Wrap />;
	}

	return (
		<Wrap>
			<Div
				className="lt-comp-sentence-splitting-content__suggestion"
				onClick={handleSuggestionClick}
				data-lt-testid="sentence-splitting-suggestion"
			>
				{isRuleDeveloperDebugMode && (
					<Span className="lt-comp-sentence-splitting-content__suggestion__origin">
						{splitSentence.label}
					</Span>
				)}
				<DiffComponent
					from={sentence}
					to={splitSentence?.text}
					className="lt-comp-sentence-splitting-content__suggestion__diff"
					isSentenceSplitting
				/>
			</Div>
		</Wrap>
	);
};

export default SentenceSplittingContent;
