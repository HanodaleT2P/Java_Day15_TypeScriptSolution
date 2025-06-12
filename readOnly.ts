interface ReadOnlyUser {
  readonly id: number;
  name: string;
}

const users: ReadOnlyUser = { id: 1, name: "Vijitha" };
// user.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property

