for file in *_*; do mv "$file" "$(echo "$file" | sed 's/_/-/g')"; done

