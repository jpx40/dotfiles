-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")

local treesitter_parser_config = require("nvim-treesitter.parsers").get_parser_configs()
treesitter_parser_config.templ = {
  install_info = {
    url = "https://github.com/vrischmann/tree-sitter-templ.git",
    files = { "src/parser.c", "src/scanner.c" },
    branch = "master",
  },
}

-- tree-sitter-supercollider
local parser_config = require("nvim-treesitter.parsers").get_parser_configs()
parser_config.supercollider = {
  install_info = {
    url = "~/code/tree-sitter-supercollider",
    files = { "src/parser.c" },
  },
  filetype = "supercollider", -- if filetype does not agrees with parser name
  used_by = { "scd", "sc" }, -- additional filetypes that use this parser
}

require("nvim-treesitter.configs").setup({
  indent = {
    enable = true,
  },
  -- ensure_installed = "maintained", -- one of "all", "maintained" (parsers with maintainers), or a list of languages
  highlight = {
    enable = true, -- false will disable the whole extension
    -- disable = { "c", "rust", "lua", "cpp", "html" , "python", "bash"},  -- list of language that will be disabled
  },
  incremental_selection = {
    enable = true,
    keymaps = {
      init_selection = "gnn",
      node_incremental = "grn",
      scope_incremental = "grc",
      node_decremental = "grm",
    },
  },
})

vim.filetype.add({
  extension = {
    templ = "templ",
  },
})

local parser_config = require("nvim-treesitter.parsers").get_parser_configs()
parser_config.gotmpl = {
  install_info = {
    url = "https://github.com/ngalaiko/tree-sitter-go-template",
    files = { "src/parser.c" },
  },
  filetype = "gotmpl",
  -- may have to remove yaml for gotmpl
  used_by = { "gohtmltmpl", "gotexttmpl", "gotmpl", "yaml" },
}

-- vim.filetype.add({
--   extension = {
--     tmpl = "gotmpl",
--   },
-- })
--
require("filetype").setup({
  overrides = {
    extensions = {
      tmpl = "templ",
      v = "vlang",
      re = "reason",
    },
  },
})

-- require("lspconfig").oxlint = {
--   default_config = {
--     cmd = { "oxlint", "lsp" },
--     filetypes = { "js", "jsx", "ts", "tsx" },
--     root_dir = require("lspconfig").util.root_pattern("package.json"),
--     settings = {},
--   },
-- }
--vim.lsp.set_log_level("debug")
