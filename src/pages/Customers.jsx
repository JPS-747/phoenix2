import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, Toolbar, ContextMenu, Filter, ExcelExport, PdfExport, Edit, Inject, Group,InfiniteScroll  } from '@syncfusion/ej2-react-grids';

import { customersData, contextMenuItems,customerGrid } from '../data/customers';
import { Header } from '../components';

const Customers = () => {
  const groupOptions = { showGroupedColumn: true, columns: ['Status'] };
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Setup" title="Customers" />
      <GridComponent
       id="CustomerId"
       dataSource={customersData}
       allowGrouping={true} 
       groupSettings={groupOptions}
       enableInfiniteScrolling={true}
       height={600} 
       pageSettings={{ pageSize: 80 }}
       allowSorting
       allowExcelExport
       allowPdfExport
       contextMenuItems={contextMenuItems}
       editSettings={editing}
       toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customerGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Toolbar,Group,Resize, Sort, ContextMenu, Filter, ExcelExport, Edit, PdfExport,InfiniteScroll]} />

      </GridComponent>
    </div>
  );
};
export default Customers;
