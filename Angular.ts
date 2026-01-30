getProducts(page: number, pageSize: number) {
  return this.http.get<any>(
    `http://localhost:3000/api/products?page=${page}&pageSize=${pageSize}`
  );
}
