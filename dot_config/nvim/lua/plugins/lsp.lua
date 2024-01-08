return {
  "neovim/nvim-lspconfig",
  --require("lspconfig").slint_lsp.setup({ cmd = { "slint-lsp" }, filetypes = { "slint" }, single_file_support = true }),

  ---@class PluginLspOpts
  opts = {
    ---@type lspconfig.options
    servers = {
      unocss = {
        cmd = { "unocss-language-server", "--stdio" },
        filetypes = { "html", "javascriptreact", "rescript", "typescriptreact", "vue", "svelte", "templ", "jsx", "tsx", "js", "ts" }, 
        root_dir = require("lspconfig.util").root_pattern('unocss.config.js', 'unocss.config.ts', 'uno.config.js', 'uno.config.ts'),
      },
  rescriptls = {},
      remark_ls = {},
      yamlls = {},
      vls = {
        cmd = { "v", "ls" },
        filetypes = { "v", "vlang" },
        root_dir = require("lspconfig.util").root_pattern("v.mod", ".git"),
      },
      -- pyright will be automatically installed with mason and loaded with lspconfig
      ruff_lsp = {},

      kotlin_language_server = {},

      elmls = {},

      r_language_server = {},

      jsonls = {},
      julials = {
        -- julia will be automatically installed with mason and loaded with lspconfig
        -- julia = {},
      },

      slint_lsp = { cmd = { "slint-lsp" }, filetypes = { "slint" }, single_file_support = true },

      tailwindcss = {
        -- exclude a filetype from the default_config
        filetypes_exclude = { "markdown" },
        -- add additional filetypes to the default_config
        filetypes_include = {
          "html",
          "javascript",
          "typescript",
          "vue",
          "svelte",
          "css",
          "scss",
          "less",
          "heex",
          "gotmpl",
          "templ",
          "tsx",
          "jsx",
          "rs",
          "rust",
        },
        -- to fully override the default_config, change the below
        -- filetypes = {}
      },
      mdx_analyzer = {},
      -- v_analzer = {},
      -- nimls = {},
      -- hls = {},
      crystalline = {},
      astro = {},
      --- awk_ls = {},
      dockerls = {},
      -- nim_langserver = {},
      grammarly = {},
      purescriptls = {},
      clojure_lsp = {},
      vimls = {},
      ocamllsp = {
        cmd = { "ocamllsp" },
        filetypes = { "ocaml", "ocaml.menhir", "ocaml.interface", "ocaml.ocamllex", "reason", "dune" },
        root_dir = require("lspconfig.util").root_pattern("dune", "Makefile", "merlin.ini", ".git"),
      },
      svelte = {
        cmd = { "svelteserver", "--stdio" },
        filetypes = { "svelte" },
      },
      templ = {
        cmd = { "templ", "lsp" },
        filetypes = { "templ" },
        root_dir = require("lspconfig.util").root_pattern("gp.work", "go.mod", ".git"),
      },
      ansiblels = {
        cmd = { "ansible-language-server", "--stdio" },
        filetypes = { "ansible" },
      },
      bashls = {
        cmd = { "bash-language-server", "start" },
        filetypes = { "sh", "zsh" },
      },

      zls = {
        cmd = { "zls" },
        filetypes = { "zig", "zir" },
        root_dir = require("lspconfig.util").root_pattern("zir.zls", "zls.zir", ".git"),
      },
      sourcekit = {
        cmd = { "sourcekit-lsp" },
      },
      htmx = {
        { "htmx-lsp" },
        filetypes = { "html", "tmpl", "heex", "gotmpl" },
      },
    },
  },
}
