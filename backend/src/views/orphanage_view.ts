import Orphanage from '../models/Orphanage';
import ImagesView from './image_view';
export default {
  render(orphanage: Orphanage) {
    const {
      id,
      about,
      instructions,
      latitude,
      longitude,
      name,
      open_on_weekends,
      opening_hours,
      images,
    } = orphanage;
    return {
      id,
      about,
      instructions,
      latitude,
      longitude,
      name,
      open_on_weekends,
      opening_hours,
      images: ImagesView.renderMany(images),
    };
  },
  renderMany(orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
