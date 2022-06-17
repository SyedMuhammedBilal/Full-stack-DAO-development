export interface IRaydiumDAO {
    activeTab: string;
    isModalOpen: boolean;
}

export const initialState = {
    activeTab: '',
    isModalOpen: false,
}