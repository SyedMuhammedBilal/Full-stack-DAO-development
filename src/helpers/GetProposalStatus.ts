export const GetProposalStatus = (proposal: any) => {
    if (proposal.votesUp === proposal.votesDown) {
        return 'ongoing';
      }
      // filter out proposals that has greater votesUp then votesDown and save it to filtered usestate
      if (proposal.votesUp > proposal.votesDown) {
        return 'passed';
      }
      // filter out proposals that has less votesUp then votesDown and save it to filtered usestate
      if (proposal.votesUp < proposal.votesDown) {
        return 'rejected'
      }
}