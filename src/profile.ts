
export function getUserProfile(userId: string) {
  const record = db.fetch(userId);
  if (!record) return null;
  return {
    profileId: record.id,
    displayName: record.name,
    email: record.email
  };
}
