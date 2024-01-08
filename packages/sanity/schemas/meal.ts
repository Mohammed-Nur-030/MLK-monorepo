export default {
    name: 'meal',
    title: 'Meal',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        },
      },
      {
        name: 'namesAndVeg',
        title: 'Names and Veg', 
        type: 'array', // Use an array for the names and veg objects
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'veg',
                title: 'Veg',
                type: 'boolean',
                default: false, // Set the default value to false
              },
              {
                  name: 'image', // Added the 'image' field
                  title: 'Image',
                  type: 'image',
                  options: {
                  hotspot: true,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'day',
        title: 'Day',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'day', // Use the first name as the source for the slug
          maxLength: 90,
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
    ],
  };
  