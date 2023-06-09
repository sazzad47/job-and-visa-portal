import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem, Filter, SearchInput } from 'react-admin';
import { Card, CardContent } from '@mui/material';

import CategoryIcon from '@mui/icons-material/LocalOffer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export const FilterSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 200 }}>
        <CardContent>
        <FilterLiveSearch label="User ID" source="userId" />
            <FilterList label="Paid" icon={<MonetizationOnIcon />}>
                <FilterListItem label="Yes" value={{ paid: true }} />
                <FilterListItem label="No" value={{ paid: false }} />
            </FilterList>
            <FilterList label="Approval" icon={<CategoryIcon />}>
                <FilterListItem label="Pending" value={{ status: 'pending' }} />
                <FilterListItem label="Approved" value={{ status: 'approved' }} />
                <FilterListItem label="Declined" value={{ status: 'declined' }} />
                
            </FilterList>
            <FilterList label="Visa" icon={<CloudUploadIcon />}>
                <FilterListItem label="Yes" value={{ uploadedVisa: true }} />
                <FilterListItem label="No" value={{ uploadedVisa: false }} />
                
            </FilterList>
        </CardContent>
    </Card>
);