import React from 'react';

const FullWidthTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left border">Name</th>
            <th className="px-4 py-2 text-left border">Email</th>
            <th className="px-4 py-2 text-left border">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Jane Doe</td>
            <td className="px-4 py-2 border">jane@example.com</td>
            <td className="px-4 py-2 border">Admin</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">John Smith</td>
            <td className="px-4 py-2 border">john@example.com</td>
            <td className="px-4 py-2 border">Editor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FullWidthTable;
