// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-stone-300 border-stone-300
// bg-fuchsia-300 border-fuchsia-300
// bg-indigo-400 border-indigo-400
// bg-teal-400 border-teal-400
// bg-gray-500 border-gray-500
// bg-red-500 border-red-500
// bg-lime-500 border-lime-500
// bg-emerald-500 border-emerald-500
// bg-cyan-500 border-cyan-500
// bg-green-500 border-green-500
// bg-sky-500 border-sky-500
// bg-violet-400 border-violet-400
// bg-purple-400 border-purple-400
// bg-pink-400 border-pink-400

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  {
    label: 'Navy Blue',
    value: 'blue',
    tw: 'blue-950',
  },
  { label: 'Bordeaux', value: 'rose', tw: 'rose-950' },
  { label: 'Stone', value: 'stone', tw: 'stone-300' },
  { label: 'Fuchsia', value: 'fuchsia', tw: 'fuchsia-300' },
  { label: 'Indigo', value: 'indigo', tw: 'indigo-400' },
  { label: 'Gray', value: 'gray', tw: 'gray-500' },
  { label: 'Red', value: 'red', tw: 'red-500' },
  { label: 'Lime', value: 'lime', tw: 'lime-500' },
  { label: 'Green', value: 'green', tw: 'green-500' },
  { label: 'Emerald', value: 'emerald', tw: 'emerald-500' },
  { label: 'Teal', value: 'teal', tw: 'teal-400' },
  { label: 'Cyan', value: 'cyan', tw: 'cyan-500' },
  { label: 'Sky', value: 'sky', tw: 'sky-500' },
  { label: 'Violet', value: 'violet', tw: 'violet-400' },
  { label: 'Purple', value: 'purple', tw: 'purple-400' },
  { label: 'Pink', value: 'pink', tw: 'pink-400' },
] as const

export const MODELS = {
  name: 'models',
  options: [
    {
      label: 'iPhone X',
      value: 'iphonex',
    },
    {
      label: 'iPhone 11',
      value: 'iphone11',
    },
    {
      label: 'iPhone 12',
      value: 'iphone12',
    },
    {
      label: 'iPhone 13',
      value: 'iphone13',
    },
    {
      label: 'iPhone 14',
      value: 'iphone14',
    },
    {
      label: 'iPhone 15',
      value: 'iphone15',
    },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Smooth Finish',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Textured Finish',
      value: 'textured',
      description: 'Soft grippy texture',
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const
