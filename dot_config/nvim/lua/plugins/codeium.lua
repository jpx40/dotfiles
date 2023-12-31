return {
  {
    "Exafunction/codeium.nvim",
    config = function()
      require("codeium").setup({

        -- Change '<C-g>' here to any keycode you like.
        -- rewrite later

        --     vim.keymap.set("i", "<C-h>", function()
        --       return vim.fn["codeium#Accept"]()
        --     end, { expr = true }),
        --
        --     --{'i', '<c-;>', function() return vim.fn['codeium#CycleCompletions'](1) end, { expr = true }}
        --     vim.keymap.set("i", "<c-;>", function()
        --       return vim.fn["codeium#CycleCompletions"](1)
        --     end, { expr = true }),
        --     vim.keymap.set("i", "<c-,>", function()
        --       return vim.fn["codeium#CycleCompletions"](-1)
        --     end, { expr = true }),
        --     vim.keymap.set("i", "<c-x>", function()
        --       return vim.fn["codeium#Clear"]()
        --     end, { expr = true }),
      })
    end,
  },
}
