// Good Luck!
// Note

// The given name may varies in casing, eg., it can be "George Saint Pierre" or "geOrGe saiNT pieRRE". Your solution should treat both as the same thing (case-insensitive).

function quote(fighter) {
  return fighter.toLowerCase() == "george saint pierre"
    ? "I am not impressed by your performance."
    : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
}
