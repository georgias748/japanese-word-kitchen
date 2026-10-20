export function validateVocabularyPair(candidate, existingPairs, editingId = null) {
  const english = candidate.english.trim();
  const japanese = candidate.japanese.trim();

  if (!english || !japanese) {
    return { ok: false, reason: "missing-language" };
  }

  const duplicate = existingPairs.some((pair) =>
    pair.id !== editingId
    && pair.english.trim().toLocaleLowerCase() === english.toLocaleLowerCase()
    && pair.japanese.trim().toLocaleLowerCase() === japanese.toLocaleLowerCase(),
  );
  if (duplicate) {
    return { ok: false, reason: "duplicate" };
  }

  return {
    ok: true,
    pair: { english, japanese },
  };
}
