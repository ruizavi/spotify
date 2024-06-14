export const removeNullUndefined = (obj: any) =>
  Object.entries(obj).reduce(
    (a: Record<string, any>, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {}
  );
