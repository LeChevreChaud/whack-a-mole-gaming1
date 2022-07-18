import {queryByLabelText, render, screen} from '@testing-library/react'
import React from 'react';
import {Mole} from "./Mole"

describe('Mole tests', () => {
  it('should display mole and hide hole', () => {
  render(<Mole isHidden={false} />);
      const mole = screen.getByLabelText("wam-mole");
      expect(mole).toBeInTheDocument();
      const hole = screen.queryByLabelText("wam-hole");
      expect(hole).toBeNull();
  });
  it('should not display mole and display hole', () => {
    render(<Mole isHidden={true} />);
        const mole = screen.queryByLabelText("wam-mole");
        expect(mole).toBeNull();
        const hole = screen.getByLabelText("wam-hole");
        expect(hole).toBeInTheDocument();
    });
});