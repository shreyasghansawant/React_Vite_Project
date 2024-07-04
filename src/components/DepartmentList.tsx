import { useState } from 'react';
import { Box, Typography, Checkbox, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
    id: number;
    name: string;
    subDepartments: SubDepartment[];
}

interface SubDepartment {
    id: number;
    name: string;
}
  
  
const departments: Department[] = [
    {
      id: 1,
      name: "Customer Service",
      subDepartments: [
        { id: 11, name: "Support" },
        { id: 12, name: "Customer Service" },
      ]
    },
    {
      id: 2,
      name: "Design",
      subDepartments: [
        { id: 21, name: "Graphic Design" },
        { id: 22, name: "Product Design" },
        { id: 23, name: "Web Design" },
      ]
    },
  ];
  

function DepartmentList() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: number]: boolean }>({});

  const handleExpand = (id: number) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelect = (id: number, type: 'department' | 'subDepartment', departmentId?: number) => {
    setSelected(prev => {
      const newSelected = { ...prev, [id]: !prev[id] };

      if (type === 'department') {
        departments.find(dept => dept.id === id)?.subDepartments.forEach(subDept => {
          newSelected[subDept.id] = !prev[id];
        });
      } else if (type === 'subDepartment' && departmentId !== undefined) {
        const department = departments.find(dept => dept.id === departmentId);
        if (department && department.subDepartments.every(subDept => newSelected[subDept.id])) {
          newSelected[departmentId] = true;
        } else {
          newSelected[departmentId] = false;
        }
      }
      return newSelected;
    });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', padding: 2 }}>
        <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
            Departments
        </Typography>
      {departments.map(department => (
        <Box key={department.id} sx={{ marginBottom: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={!!selected[department.id]}
              onChange={() => handleSelect(department.id, 'department')}
            />
            <Typography variant="h6" component="div">
              {department.name}
            </Typography>
            <IconButton onClick={() => handleExpand(department.id)}>
              {expanded[department.id] ? <ExpandLess/> : <ExpandMore/>}
            </IconButton>
          </Box>
          {expanded[department.id] && (
            <Box sx={{ paddingLeft: 4 }}>
              {department.subDepartments.map(subDept => (
                <Box key={subDept.id} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox
                    checked={!!selected[subDept.id]}
                    onChange={() => handleSelect(subDept.id, 'subDepartment', department.id)}
                  />
                  <Typography variant="body1">{subDept.name} </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default DepartmentList;
