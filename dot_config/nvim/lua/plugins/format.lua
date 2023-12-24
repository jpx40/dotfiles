return {-- new filetypes for prettier
{"stevearc/conform.nvim",
opts =  function(_, opts)
  opts.list_extend(opts.formatters_by_ft, {
        ["svelte"] = {"prettier"}, -- "--parser", "svelte"},
   ["templ"] = {"prettier"},
    ["html"] = {"prettier"},
    ["css"] = {"prettier"},
    ["gotmpl"] = {"prettier"},
    ["heex"] = {"prettier"},
    ["json"] = {"prettier"},
  ["reason"] = {"refmt"},

  })
end,
},}