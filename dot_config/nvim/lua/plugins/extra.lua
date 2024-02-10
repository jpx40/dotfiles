return {

  { "danielo515/nvim-treesitter-reason" },

  { "vrischmann/tree-sitter-templ" },

  { "kevinhwang91/nvim-ufo", requires = "kevinhwang91/promise-async" },

  { "quarto-dev/quarto-nvim", enabled = false },

  { "kevinhwang91/nvim-ufo", enabled = false },

  -- R
  {
    "jalvesaq/Nvim-R",
    lazy = false,
  },

  {
    "kiyoon/jupynium.nvim",
    enabled = false,
    build = "pip3 install --user . --break-system-packages",
    -- build = "conda run --no-capture-output -n jupynium pip install .",
    -- enabled = vim.fn.isdirectory(vim.fn.expand "~/miniconda3/envs/jupynium"),
  },
  "rcarriga/nvim-notify", -- optional
  "stevearc/dressing.nvim", -- optional, UI for :JupyniumKernelSelect

  "JoosepAlviste/nvim-ts-context-commentstring",

  {
    "ray-x/navigator.lua",
    enabled = false,
    dependencies = {
      { "ray-x/guihua.lua", run = "cd lua/fzy && make" },
      { "neovim/nvim-lspconfig" },
    },
  },
  {
    "cuducos/yaml.nvim",
    ft = { "yaml" }, -- optional
    dependencies = {
      "nvim-treesitter/nvim-treesitter",
      "nvim-telescope/telescope.nvim", -- optional
    },
  },
  { "skywind3000/asyncrun.vim" },
}
