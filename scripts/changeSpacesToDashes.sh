for file in *\ *; do mv "$file" "${file// /-}"; done

