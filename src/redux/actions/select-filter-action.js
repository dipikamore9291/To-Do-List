export default function selectFilter(type) {
  return {
    type: "SELECT_FILTER",
    payload: type,
  };
}
