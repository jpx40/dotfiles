return { {
    "nvim-treesitter/nvim-treesitter",
      lazy = false,
  priority = 999,
  build = ":TSUpdate",
      cmd = { "TSUpdateSync" },

    dependencies = {
      "windwp/nvim-ts-autotag",
    },
    opts = {
      ensure_installed = {
        "bash",
        "html",
        "javascript",
        "json",
        "lua",
        "markdown",
        "markdown_inline",
        "python",
        "query",
        "regex",
        "tsx",
        "typescript",
        "vim",
        "yaml",
        "elixir",
        "zig",
        "r",
        "go",
        "rust",
        "ini",
        "julia",
        "svelte",
        "heex",
        "css",
        "scss",
        "reason",
        "toml",
        "vue",
        "ocaml",        
        "dockerfile",
        "gitignore",
        "v",
        "sql"
        
            },
require'nvim-treesitter.configs'.setup {

      autotag = {
        -- Setup autotag using treesitter config.
          enable = true,
    enable_rename = true,
    enable_close = true,
    enable_close_on_slash = true,
        filetypes = {
        "html",
        "javascript",
        "typescript",
        "javascriptreact",
        "typescriptreact",
        "svelte",
        "vue",
        "tsx",
        "jsx",
        "rescript",
        "xml",
        "php",
        "markdown",
        "astro",
        "glimmer",
        "handlebars",
        "hbs",
        "heex",
        "templ",
        "gotmpl",
        "go",
        "elixir",

        },
        },
      },
    },
  },

  -- since `vim.tbl_deep_extend`, can only merge tables and not lists, the code above
  -- would overwrite `ensure_installed` with the new value.
  -- If you'd rather extend the default config, use the code below instead:
  {
    "nvim-treesitter/nvim-treesitter",
    opts = function(_, opts)
      -- add tsx and treesitter
      vim.list_extend(opts.ensure_installed, {
        "tsx",
        "typescript",
      })
    end,
  },}