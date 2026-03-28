import {createAsyncThunk} from '@reduxjs/toolkit'

export const homeAsyncThunk = createAsyncThunk(
    "home",
    async() => {
        const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))
        await sleep(2000)
        return content
    }
)

// 🔹 Section interface (NO id, NO type)
  export interface Content {
    title?: string;
    data: unknown[];
  }

  // 🔹 Item interfaces (IDs ONLY here)
  export interface ChipItem {
    id: string;
    label: string;
  }

  export interface BannerItem {
    id: string;
    image: string;
    title: string;
  }

  export interface MovieItem {
    id: string;
    poster: string;
  }

  // 🔹 Data
  const content: Content[] = [
    {
      data: [
        { id: 'c1', label: 'Coming Soon' },
        { id: 'c2', label: 'Comedy' },
        { id: 'c3', label: 'Drama' },
        { id: 'c4', label: 'Sci-Fi' },
        { id: 'c5', label: 'Romance' },
      ],
    },
    {
      data: [
        {
          id: 'b1',
          image:
            'https://m.media-amazon.com/images/M/MV5BMmQ0ZjliZTgtMjQ3NC00N2NiLTkxNjktY2VkOTQ2N2QyODNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          title: 'Kuch Kuch Hota Hai',
        },
      ],
    },
    {
      title: 'Releases in the Past Year',
      data: [
        {
          id: 'm1',
          poster:
            'https://assets.gadgets360cdn.com/pricee/assets/product/202512/Tu_Meri_Main_Tera_Main_Tera_Tu_M_1765534607.jpg',
        },
        {
          id: 'm2',
          poster:
            'https://assets.gadgets360cdn.com/pricee/assets/product/202512/Raat_Akeli_Hai_The_Bansal_Murders_1765883140.jpg',
        },
      ],
    },
    {
      title: 'Continue Watching',
      data: [
        {
          id: 'm3',
          poster:
            'https://assets.gadgets360cdn.com/pricee/assets/product/202512/Tu_Meri_Main_Tera_Main_Tera_Tu_M_1765534607.jpg',
        },
        {
          id: 'm4',
          poster:
            'https://assets.gadgets360cdn.com/pricee/assets/product/202512/Raat_Akeli_Hai_The_Bansal_Murders_1765883140.jpg',
        },
      ],
    },
  ];