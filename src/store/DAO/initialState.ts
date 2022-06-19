export interface IRaydiumDAO {
    activeTab: string;
    isModalOpen: boolean;
    passRate: number;
    totalProposal: number;
    count: number;
    forVote: number;
    againstVote: number;
}

export const initialState = {
    activeTab: '',
    isModalOpen: false,
    passRate: 0,
    totalProposal: 0,
    count: 0,
    forVote: 0,
    againstVote: 0,
}