export class User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  phone: string;
  location: {
    street: string;
    country:string;
    city: string;
    state: string;
    postcode: number;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  nat: string;
  registered: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };

  dob: {
    date: string;
    age: number;
  };

  id: {
    name: string;
    value: string;
  };
}
