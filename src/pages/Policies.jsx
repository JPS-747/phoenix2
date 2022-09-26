import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, Toolbar, ContextMenu, Filter, ExcelExport, PdfExport, Edit, Inject, Group  } from '@syncfusion/ej2-react-grids';

import { policiesData, contextMenuItems,policyGrid } from '../data/policies';
import { Header } from '../components';

const Policies = () => {
  const groupOptions = { showGroupedColumn: true, columns: ['Status'] };
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Setup" title="Policies" />
      <GridComponent
       id="PolicyId"
       dataSource={policiesData}
       allowGrouping={true} 
       groupSettings={groupOptions}
       allowSorting
       allowExcelExport
       allowPdfExport
       contextMenuItems={contextMenuItems}
       editSettings={editing}
       toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {policyGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Toolbar,Group,Resize, Sort, ContextMenu, Filter, ExcelExport, Edit, PdfExport]} />

      </GridComponent>
    </div>
  );
};
export default Policies;
