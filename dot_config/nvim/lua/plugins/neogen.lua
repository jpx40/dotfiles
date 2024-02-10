return {
  {
    "danymat/neogen",
    enabled = false,
    dependencies = "nvim-treesitter/nvim-treesitter",
    --config = true,
    config = function()
      require("neogen").setup({})
    end,
    -- Uncomment next line if you want to follow only stable versions
    -- version = "*"
  },
}
