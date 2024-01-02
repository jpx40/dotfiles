return { -- add any tools you want to have installed below
  {
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
      },
    },
  },
}

