import Image from '../models/Image';

export default {
  render(image: Image) {
    const { id, path } = image;
    return {
      id,
      url: `http://192.168.100.11:3333/uploads/${path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
