-- Read the docs: https://www.lunarvim.org/docs/configuration
-- Video Tutorials: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6
-- Forum: https://www.reddit.com/r/lunarvim/
-- Discord: https://discord.com/invite/Xb9B4Ny


-- lvim.format_on_save.enable = true


lvim.plugins = {

  "olexsmir/gopher.nvim",
  "leoluz/nvim-dap-go",


}



lvim.builtin.treesitter.ensure_installed = {
  "javascript",
  "json",
  "lua",
  "typescript",
  "tsx",
  "css",
  "elixir",
  "heex",
  "go",
  "gomod",
  "cpp", "c",
  "rust",
  "zig",
  "python",
  "ocaml",
  "markdown",
}

lvim.lsp.installer.setup.ensure_installed = {
  "lua_ls",
  "cssls",
  "tsserver",
  "tailwindcss",
  "elixirls",
  "ocamllsp",

}


------------------------
-- Formatting
------------------------
local formatters = require "lvim.lsp.null-ls.formatters"
formatters.setup {
  { command = "goimports",   filetypes = { "go" } },
  { command = "gofumpt",     filetypes = { "go" } },
  --{ command = "ocp-indent",  filetypes = { "ml" } },

  { command = "ocamlformat", filetypes = { "ml" } }, }

-- lvim.format_on_save = {
--   pattern = { "*" },
-- }

------------------------
-- Dap
------------------------
local dap_ok, dapgo = pcall(require, "dap-go")
if not dap_ok then
  return
end

dapgo.setup()

------------------------
-- LSP
------------------------
vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, { "gopls" })

local lsp_manager = require "lvim.lsp.manager"
lsp_manager.setup("golangci_lint_ls", {
  on_init = require("lvim.lsp").common_on_init,
  capabilities = require("lvim.lsp").common_capabilities(),
})




lsp_manager.setup("gopls", {
  on_attach = function(client, bufnr)
    require("lvim.lsp").common_on_attach(client, bufnr)
    local _, _ = pcall(vim.lsp.codelens.refresh)
    local map = function(mode, lhs, rhs, desc)
      if desc then
        desc = desc
      end

      vim.keymap.set(mode, lhs, rhs, { silent = true, desc = desc, buffer = bufnr, noremap = true })
    end
    map("n", "<leader>Ci", "<cmd>GoInstallDeps<Cr>", "Install Go Dependencies")
    map("n", "<leader>Ct", "<cmd>GoMod tidy<cr>", "Tidy")
    map("n", "<leader>Ca", "<cmd>GoTestAdd<Cr>", "Add Test")
    map("n", "<leader>CA", "<cmd>GoTestsAll<Cr>", "Add All Tests")
    map("n", "<leader>Ce", "<cmd>GoTestsExp<Cr>", "Add Exported Tests")
    map("n", "<leader>Cg", "<cmd>GoGenerate<Cr>", "Go Generate")
    map("n", "<leader>Cf", "<cmd>GoGenerate %<Cr>", "Go Generate File")
    map("n", "<leader>Cc", "<cmd>GoCmt<Cr>", "Generate Comment")
    map("n", "<leader>DT", "<cmd>lua require('dap-go').debug_test()<cr>", "Debug Test")
  end,
  on_init = require("lvim.lsp").common_on_init,
  capabilities = require("lvim.lsp").common_capabilities(),
  settings = {
    gopls = {
      usePlaceholders = true,
      gofumpt = true,
      codelenses = {
        generate = false,
        gc_details = true,
        test = true,
        tidy = true,
        completeUnimported = true,

      },
    },
  },
})

local status_ok, gopher = pcall(require, "gopher")
if not status_ok then
  return
end

gopher.setup {
  commands = {
    go = "go",
    gomodifytags = "gomodifytags",
    gotests = "gotests",
    impl = "impl",
    iferr = "iferr",
  },
}

vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, { "tailwindcss", "clangd" })
local opts = {
  root_dir = function(fname)
    local util = require "lspconfig/util"
    return util.root_pattern("assets/tailwind.config.js", "tailwind.config.js", "tailwind.config.cjs", "tailwind.js",
      "tailwind.cjs")(fname)
  end,
  init_options = {
    userLanguages = { heex = "html", elixir = "html" }
  },
}
require("lvim.lsp.manager").setup("tailwindcss", opts)

table.insert(lvim.plugins, {
  "p00f/clangd_extensions.nvim",
})

table.insert(lvim.plugins, {
  "FeiyouG/commander.nvim",
  Dependencies = { "nvim-telescope/telescope.nvim" },
  config = function()
    require("commander").setup(
      {
        intgrations = {
          telescope = {
            enable = true,
            theme = require("telescope.themes").commander
          },
          lazy = {
            enable = true
          }
        }
      }
    )
  end

})



table.insert(lvim.plugins, {
  'Exafunction/codeium.vim',
  config = function()
    -- Change '<C-g>' here to any keycode you like.
    vim.keymap.set('i', '<C-h>', function() return vim.fn['codeium#Accept']() end, { expr = true })
    vim.keymap.set('i', '<c-;>', function() return vim.fn['codeium#CycleCompletions'](1) end, { expr = true })
    vim.keymap.set('i', '<c-,>', function() return vim.fn['codeium#CycleCompletions'](-1) end, { expr = true })
    vim.keymap.set('i', '<c-x>', function() return vim.fn['codeium#Clear']() end, { expr = true })
  end

})

table.insert(lvim.plugins, {
  "Pocco81/auto-save.nvim",
  config = function()
    require("auto-save").setup {
      enabled = true,        -- start auto-save when the plugin is loaded (i.e. when your package manager loads it)
      execution_message = {
        message = function() -- message to print on save
          return ("AutoSave: saved at " .. vim.fn.strftime("%H:%M:%S"))
        end,
        dim = 0.18,                                      -- dim the color of `message`
        cleaning_interval = 1250,                        -- (milliseconds) automatically clean MsgArea after displaying `message`. See :h MsgArea
      },
      trigger_events = { "InsertLeave", "TextChanged" }, -- vim events that trigger auto-save. See :h events
      -- function that determines whether to save the current buffer or not
      -- return true: if buffer is ok to be saved
      -- return false: if it's not ok to be saved
      condition = function(buf)
        local fn = vim.fn
        local utils = require("auto-save.utils.data")

        if
            fn.getbufvar(buf, "&modifiable") == 1 and
            utils.not_in(fn.getbufvar(buf, "&filetype"), {}) then
          return true                -- met condition(s), can save
        end
        return false                 -- can't save
      end,
      write_all_buffers = false,     -- write all buffers when the current one meets `condition`
      debounce_delay = 135,          -- saves the file at most every `debounce_delay` milliseconds
      callbacks = {                  -- functions to be executed at different intervals
        enabling = nil,              -- ran when enabling auto-save
        disabling = nil,             -- ran when disabling auto-save
        before_asserting_save = nil, -- ran before checking `condition`
        before_saving = nil,         -- ran before doing the actual save
        after_saving = nil           -- ran after doing the actual save
      }
    }
  end,

})

table.insert(lvim.plugins, {
  "windwp/nvim-ts-autotag",
  lazy = false,
  config = function()
    require("nvim-ts-autotag").setup()
  end

})


lsp_manager.setup("html", {
  on_attach = on_attach,
  capabilities = capabilities,
  cmd = { "vscode-html-language-server", "--stdio" },
  filetype = { "html", "template", "jsx", "tsx", "svelte", "tmpl" },

})


lsp_manager.setup("cssls", {
  on_attach = on_attach,
  capabilities = capabilities,
  cmd = { "vscode-css-language-server", "--stdio" },
  filetype = { "css", "scss", "less" },
})

lsp_manager.setup("tsserver", {
  on_attach = on_attach,
  capabilities = capabilities,
  cmd = { "vscode-typescript-language-server", "--stdio" },
  filetype = { "typescript", "typescriptreact", "typescript.tsx" },
})


lsp_manager.setup("tailwindcss", {
  on_attach = on_attach,
  capabilities = capabilities,
  cmd = { "vscode-tailwindcss", "--stdio" },
  filetype = { "css", "scss", "less" },
})


lsp_manager.setup("lua_ls", {
  on_attach = on_attach,
  capabilities = capabilities,
  cmd = { "lua-language-server" },
  filetype = { "lua" },
})

lsp_manager.setup("emmet_language_server", {
  filetypes = { "css", "eruby", "html", "javascript", "javascriptreact", "less", "sass", "scss", "svelte", "pug",
    "typescriptreact", "vue" },
  -- Read more about this options in the [vscode docs](https://code.visualstudio.com/docs/editor/emmet#_emmet-configuration).
  -- **Note:** only the options listed in the table are supported.
  init_options = {
    --- @type string[]
    excludeLanguages = {},
    --- @type table<string, any> [Emmet Docs](https://docs.emmet.io/customization/preferences/)
    preferences = {},
    --- @type boolean Defaults to `true`
    showAbbreviationSuggestions = true,
    --- @type "always" | "never" Defaults to `"always"`
    showExpandedAbbreviation = "always",
    --- @type boolean Defaults to `false`
    showSuggestionsAsSnippets = false,
    --- @type table<string, any> [Emmet Docs](https://docs.emmet.io/customization/syntax-profiles/)
    syntaxProfiles = {},
    --- @type table<string, string> [Emmet Docs](https://docs.emmet.io/customization/snippets/#variables)
    variables = {},
  },
})


-- table.insert(lvim.plugins, {
--     'mrjones2014/legendary.nvim',
--   version = 'v2.1.0',
--   -- since legendary.nvim handles all your keymaps/commands,
--   -- its recommended to load legendary.nvim before other plugins
--   priority = 10000,
--   lazy = false,
--   -- sqlite is only needed if you want to use frecency sorting
--   dependencies = { 'kkharji/sqlite.lua' }
-- })



lvim.keys.normal_mode["e"] = "<Up>"

lvim.keys.normal_mode["n"] = "<Down>"
lvim.keys.normal_mode['i'] = "<Right>"

lvim.keys.normal_mode['l'] = "<insert>"
-- move to next word inculsive with f  word motions



lvim.keys.normal_mode['k'] = false

lvim.format_on_save.enabled = true
