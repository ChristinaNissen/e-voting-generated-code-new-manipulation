/**
 * Copyright 2023 Christina Frederikke Nissen, Elisabeth Fredrich
 *
 * This file is part of e-voting-system-auto-replace.
 *
 * e-voting-system-auto-replace is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * e-voting-system-auto-replace is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with e-voting-system-auto-replace. If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-narrow">
          <h1 className="blue-text">Thank you for voting!</h1>
          <Text>
          You have completed General Election 2023. 
          </Text>
        {/*   <Text>
            Please use this webpage to check, if your vote has been saved
            correctly by finding your unique verification code.
          </Text> */}
          <Button className="blue-btn" onClick={() => navigate("/info-3")}>
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
}
