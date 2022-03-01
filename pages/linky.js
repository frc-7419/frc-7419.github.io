import { useRouter } from 'next/router'

function Linky() {
    const router = useRouter();
    if (typeof window !== 'undefined') {
        router.push('https://youtu.be/dQw4w9WgXcQ')
    }
    return null;
}

export default Linky;