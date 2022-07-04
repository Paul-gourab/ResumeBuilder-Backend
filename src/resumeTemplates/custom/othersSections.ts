import { FormStyles } from "../../interfaces/FormStyles";
import { Others } from "../../interfaces/Others";
import { SectionStyles } from "./_SectionStyles";

export const OthersSection1 = (
  others: { x: number; y: number; w: number; h: number; data: Others },
  formStyles: FormStyles
) => {
  return /*html*/ `
    <div style="${SectionStyles.sectionWrapper({ x: others.x, y: others.y, w: others.w, h: others.h })}">
      <div style="${SectionStyles.blockTitleDiv(formStyles)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
          ${others.data.title}
        </h2>
      </div>
      <!--<h2 style="font-weight: 600; color: #123456">Other Skills & Activities</h2>-->
      <div style="margin-bottom: 12px">
        <!-- Other Skills and Activities Area -->
        <ul>
          ${others.data.data
            .map((element) => {
              return `
                <li>
                  <div>
                    ${element}
                  </div>
                </li>
                `;
            })
            .join("")}
        </ul>
      </div>
    </div>
  `;
};
