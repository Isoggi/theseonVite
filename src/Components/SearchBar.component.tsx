import {
  Button,
  mergeClasses,
  makeStyles,
  SearchBox,
} from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";
import { useEffect, useRef, useState, type FormEvent } from "react";

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
    flex: "0 1 480px",
    maxWidth: "480px",
    minWidth: 0,
    width: "100%",
  },
  mobileForm: {
    flex: "0 0 40px",
    minWidth: "40px",
    overflow: "hidden",
    transition: "flex-basis 0.2s ease-in-out, width 0.2s ease-in-out",
    width: "40px",
  },
  mobileFormExpanded: {
    flex: "0 1 280px",
    maxWidth: "100%",
    width: "min(280px, 100%)",
  },
  input: {
    flexGrow: 1,
    minWidth: 0,
  },
  searchButton: {
    minWidth: "40px",
    width: "40px",
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
  const [isExpanded, setIsExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded) {
      searchInputRef.current?.focus();
    }
  }, [isExpanded]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query.trim());
  }

  return (
    <form
      className={mergeClasses(
        styles.form,
        startAsButton && styles.mobileForm,
        isExpanded && startAsButton && styles.mobileFormExpanded,
      )}
      onSubmit={handleSubmit}
      role="search"
    >
      {startAsButton ? (
        <>
          {isExpanded ? (
            <SearchBox
              ref={searchInputRef}
              aria-label={ariaLabel}
              className={styles.input}
              contentBefore={<SearchRegular />}
              onBlur={() => setIsExpanded(false)}
              onChange={(_, data) => setQuery(data.value)}
              placeholder={placeholder}
              value={query}
            />
          ) : (
            <Button
              aria-label={ariaLabel}
              appearance="subtle"
              className={styles.searchButton}
              icon={<SearchRegular />}
              onClick={() => setIsExpanded(true)}
              type="button"
            />
          )}
        </>
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
