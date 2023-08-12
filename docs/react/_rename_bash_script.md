
# Rename files

```bash
#!/bin/bash
for file in *; do
    if [[ -f "$file" ]]; then
        prefix="$(echo "$file" | grep -o '^[0-9]-')"
        newname="$(echo "$file" | sed -E "s/^[0-9]-//; s/[[:space:]]/-/g; s/.*/\L&/")"
        newname="${prefix}${newname}"
        mv "$file" "$newname"
    fi
done
```
