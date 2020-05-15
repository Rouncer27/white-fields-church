export const createSlug = url => {
  const slug = url
    .split("/")
    .filter(part => {
      if (
        part !== "" &&
        part !== "http:" &&
        part !== "https:" &&
        part !== "localhost"
      )
        return part
    })
    .filter((slug, index) => {
      if (index !== 0) return slug
    })
    .join("/")

  return slug === "home" ? "/" : slug
}
