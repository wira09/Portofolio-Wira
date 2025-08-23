# Dark Mode Implementation Guide

## Overview
Portfolio ini telah diimplementasikan dengan fitur dark mode yang lengkap menggunakan React Context dan Tailwind CSS.

## Fitur yang Tersedia

### 1. Toggle Button
- **Desktop**: Toggle switch di navbar dengan animasi smooth
- **Mobile**: Toggle button di mobile menu dengan label yang jelas
- **Icon**: Sun icon untuk light mode, moon icon untuk dark mode

### 2. Persistensi
- Theme disimpan di localStorage
- Mengikuti preferensi sistem (system preference)
- Tidak hilang saat refresh halaman

### 3. Transisi Smooth
- Semua perubahan theme menggunakan transisi 300ms
- Animasi yang halus untuk semua elemen

## Cara Penggunaan

### 1. Menggunakan Theme Context
```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      <button onClick={toggleTheme}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
```

### 2. Menggunakan Custom Hook
```jsx
import { useDarkMode } from '../hooks/useDarkMode';

function MyComponent() {
  const { isDark, toggleTheme, darkClass } = useDarkMode();
  
  return (
    <div className={darkClass('bg-white', 'bg-gray-800')}>
      <h1 className={darkClass('text-black', 'text-white')}>
        Hello World
      </h1>
    </div>
  );
}
```

## Class Names yang Tersedia

### Background Colors
- `bg-white dark:bg-gray-900` - Background utama
- `bg-gray-100 dark:bg-gray-800` - Background secondary
- `bg-gray-200 dark:bg-gray-700` - Background tertiary

### Text Colors
- `text-black dark:text-white` - Text utama
- `text-gray-600 dark:text-gray-300` - Text secondary
- `text-gray-500 dark:text-gray-400` - Text muted

### Border Colors
- `border-gray-200 dark:border-gray-600` - Border light
- `border-gray-300 dark:border-gray-500` - Border medium

## Custom Utilities

### Gradient Backgrounds
- `bg-gradient-light` - Light theme gradient
- `bg-gradient-dark` - Dark theme gradient

### Text Gradients
- `text-gradient-light` - Light theme text gradient
- `text-gradient-dark` - Dark theme text gradient

## Struktur File

```
src/
├── context/
│   └── ThemeContext.jsx      # Context provider untuk theme
├── hooks/
│   └── useDarkMode.js        # Custom hook untuk dark mode
├── components/
│   └── Navbar.jsx           # Navbar dengan toggle button
├── App.jsx                   # Root component dengan ThemeProvider
└── index.css                 # CSS dengan dark mode support
```

## Implementasi di Komponen Baru

### 1. Import Context
```jsx
import { useTheme } from '../context/ThemeContext';
```

### 2. Gunakan Hook
```jsx
const { isDark, toggleTheme } = useTheme();
```

### 3. Tambahkan Dark Mode Classes
```jsx
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
  <h1 className="text-2xl font-bold">Title</h1>
  <p className="text-gray-600 dark:text-gray-300">Description</p>
</div>
```

## Best Practices

1. **Selalu gunakan class `dark:`** untuk styling dark mode
2. **Gunakan transisi** untuk perubahan yang smooth
3. **Test di kedua mode** untuk memastikan kontras yang baik
4. **Gunakan semantic colors** dari Tailwind untuk konsistensi

## Troubleshooting

### Dark Mode Tidak Berfungsi
1. Pastikan `ThemeProvider` sudah membungkus aplikasi
2. Check apakah `darkMode: 'class'` ada di `tailwind.config.js`
3. Pastikan class `dark` ditambahkan ke `html` element

### Transisi Tidak Smooth
1. Pastikan `transition-colors duration-300` sudah ditambahkan
2. Check CSS custom properties di `index.css`

### Toggle Button Tidak Muncul
1. Pastikan `useTheme()` hook sudah diimport dengan benar
2. Check apakah context sudah di-wrap dengan `ThemeProvider` 