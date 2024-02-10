return { -- add any tools you want to have installed below
  {
    -- https://analysis-tools.dev/tools?
    -- https://github.com/williamboman/mason.nvim/blob/main/doc/reference.md
    "williamboman/mason.nvim",
    opts = {
      ensure_installed = {
        "stylua",
        "shellcheck",
        "shfmt",
        "flake8",
        "gopls",
        "goimports",
        "bash-language-server",
        "pyright",
        "elixir-ls",
        "gofumpt",
        "golangci-lint",
        "julia-lsp",
        "htmx-lsp",
        "oxlint",
        "delve",
        "ktlint",
        "ocamlformat",
        "biome",
        "rufo",
        "rubocop",
        --        "rust-analyzer@2024-01-01",
        --        "staticlint",
      },
    },
  },
}
