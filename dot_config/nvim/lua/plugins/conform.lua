return { -- new filetypes for prettier
  {
    "stevearc/conform.nvim",

    opts = {
      formatters_by_ft = {
        templ = { "prettier" },
        -- rust = { "prettier" },
      },
    },
  },
}
