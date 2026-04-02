tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'display': ['Fredoka', 'sans-serif'],
                'body': ['Nunito', 'sans-serif'],
            },
            colors: {
                'kenya-green': '#2563EB',
                'kenya-red': '#CC0000',
                'kenya-black': '#000000',
                'school-yellow': '#FFD93D',
                'school-orange': '#FF6B35',
                'school-blue': '#4ECDC4',
                'school-purple': '#9B5DE5',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            }
        }
    }
}
