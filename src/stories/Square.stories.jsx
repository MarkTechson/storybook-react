import React from 'react';
import { Square } from './Square';

export default {
    title: 'Shapes/Square',
    component: Square
};

const Template = (args) => <Square {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    label: 'Standard Box'
};
