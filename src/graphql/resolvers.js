import Product from '../models/productoSchema';
export const resolvers = {
    Query: {
        async getProducts() {
            const products = await Product.find();
            return products;
        },
        async getProduct(_, { _id }) {
            return await Product.findById(_id);
        }

    },
    Mutation: {
        async createProduct(_, { input }) {
            const producto = new Product(input);
            return await producto.save();
        },
        async updateProduct(_, { _id, input }) {
            return await Product.findByIdAndUpdate(_id, input, { new: true });
        },
        async deleteProduct(_, {_id}) {
          return await Product.findByIdAndDelete(_id);
        }


    }
}