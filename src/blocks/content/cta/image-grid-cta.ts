import { Block } from "payload";

const ImageGridCta: Block = {
    slug: 'image-grid-cta',
    labels: {
        singular: 'Image Grid CTA',
        plural: 'Image Grid CTAs'
    },
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true
        },
        {
            type: 'richText',
            name: 'body',
            required: true
        },
        {
            type: 'array',
            name: 'images',
            minRows: 3,
            maxRows: 3,
            required: true,
            fields: [{
                type: 'upload',
                name: 'image',
                relationTo: 'media'
            }]
        }
    ]
}

export default ImageGridCta