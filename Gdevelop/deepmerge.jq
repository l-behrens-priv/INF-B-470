def deepmerge(a;b):
    reduce b[] as $item (a;
        reduce ($item | keys_unsorted[]) as $key (.;
            $item[$key] as $val | ($val | type) as $type | .[$key] = if ($type == "object") then
            deepmerge({}; [if .[$key] == null then {} else .[$key] end, $val])
            elif ($type == "null") then
            .[$key]
            else
            $val
            end)
        );
    deepmerge({}; .)
