return {
  "neovim/nvim-lspconfig",
  -- other settings removed for brevity
  opts = {
    ---@type lspconfig.options
    servers = {
      golangci_lint_ls = {
        settings = {
          -- helps eslint find the eslintrc when it's placed in a subfolder instead of the cwd root
          workingDirectory = { mode = "auto" },
        },
      },
    },
    setup = {
      eslint = function()
        local function get_client(buf)
          return require("lazyvim.util").lsp.get_clients({ name = "golangci-lint-ls", bufnr = buf })[1]
        end

        local formatter = require("lazyvim.util").lsp.formatter({
          name = "golangci-lint-ls: lsp",
          primary = false,
          priority = 200,
          filter = "golangci-lint-ls",
        })

        -- Use EslintFixAll on Neovim < 0.10.0
        if not pcall(require, "vim.lsp._dynamic") then
          formatter.name = "golangci-lint-ls: EslintFixAll"
          formatter.sources = function(buf)
            local client = get_client(buf)
            return client and { "golangci-lint-ls" } or {}
          end
          formatter.format = function(buf)
            local client = get_client(buf)
            if client then
              local diag = vim.diagnostic.get(buf, { namespace = vim.lsp.diagnostic.get_namespace(client.id) })
              if #diag > 0 then
                vim.cmd("EslintFixAll")
              end
            end
          end
        end

        -- register the formatter with LazyVim
        require("lazyvim.util").format.register(formatter)
      end,
    },
  },
}
