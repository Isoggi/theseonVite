import {
  mergeClasses,
  makeStyles,
  SearchBox,
} from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";
import { useState, type FormEvent } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  startAsButton?: boolean;
  placeholder?: string;
  ariaLabel?: string;
};

const useStyles = makeStyles({
  form: {
    alignItems: "center",
    display: "flex",
    gap: "8px",
    maxWidth: "100%",
    width: "480px",
  },
  input: {
    flexGrow: 1,
    minWidth: 0,
  },
  searchBoxButton: {
    transitionProperty: "width",
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease-in-out",
    width: "80px", // Default collapsed width
  },
  searchBoxButtonExpanded: {
    width: "400px", // Expanded width when focused
  },
});

export default function SearchBar({
  onSearch,
  startAsButton = false,
  placeholder = "Search",
  ariaLabel = "Search",
}: SearchBarProps) {
  const styles = useStyles();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query.trim());
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} role="search">
      {startAsButton ? (
        <SearchBox
          aria-label={ariaLabel}
          className={mergeClasses(
            styles.searchBoxButton,
            isFocused && styles.searchBoxButtonExpanded,
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          contentBefore={<SearchRegular />}
          onChange={(_, data) => setQuery(data.value)}
          placeholder={placeholder}
          value={query}
        />
      ) : (
        <SearchBox
          aria-label={ariaLabel}
          className={styles.input}
          contentBefore={<SearchRegular />}
          onChange={(_, data) => setQuery(data.value)}
          placeholder={placeholder}
          value={query}
        />
      )}
    </form>
  );
}
