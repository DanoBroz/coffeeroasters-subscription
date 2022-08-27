import { useState } from 'react';

export const useOpen = (initialValue?: boolean) => {
    const [openState, setOpenState] = useState(initialValue || false)

    return { openState, setOpenState }
}
