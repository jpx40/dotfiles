return {
  { "declancm/git-scripts.nvim", enabled = false, requires = "nvim-lua/plenary.nvim" },
  {
    "NeogitOrg/neogit",
    dependencies = {
      "nvim-lua/plenary.nvim", -- required
      "sindrets/diffview.nvim", -- optional - Diff integration

      -- Only one of these is needed, not both.
      "nvim-telescope/telescope.nvim", -- optional
      --"ibhagwan/fzf-lua", -- optional
    },
    config = true,
  },

  { "sindrets/diffview.nvim" },
  {
    "kdheepak/lazygit.nvim",
    -- optional for floating window border decoration
    dependencies = {
      "nvim-lua/plenary.nvim",
    },
  },
}
