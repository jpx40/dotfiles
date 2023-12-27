return {

{'danielo515/nvim-treesitter-reason'},

{"vrischmann/tree-sitter-templ"},

{ 'kevinhwang91/nvim-ufo',  requires = 'kevinhwang91/promise-async' },

{ 'quarto-dev/quarto-nvim', enabled = false },

{ 'kevinhwang91/nvim-ufo',  enabled = false },

-- R
{
  "jalvesaq/Nvim-R",
  lazy = false
},



{
    "kiyoon/jupynium.nvim",
    build = "pip3 install --user .",
    -- build = "conda run --no-capture-output -n jupynium pip install .",
    -- enabled = vim.fn.isdirectory(vim.fn.expand "~/miniconda3/envs/jupynium"),
  },
  "rcarriga/nvim-notify",   -- optional
  "stevearc/dressing.nvim", -- optional, UI for :JupyniumKernelSelect
}