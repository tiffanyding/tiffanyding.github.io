/* ------------------------------------------------------------------------------
	Site Navigator for Photography Section
-------------------------------------------------------------------------------*/

// Complete site tree structure with photo counts
const siteTree = {
    id: 'photo',
    label: 'Photos',
    url: 'photo.html',
    children: [
        {
            id: 'nature',
            label: 'Nature',
            url: 'nature.html',
            children: [
                { id: 'birds', label: 'Birds', url: 'birds.html', count: 7 },
                { id: 'flowers', label: 'Flowers', url: 'flowers.html', count: 15 },
                { id: 'trees', label: 'Trees', url: 'trees.html', count: 10 },
                { id: 'water', label: 'Water', url: 'water.html', count: 12 },
                { id: 'skyscapes', label: 'Skyscapes', url: 'skyscapes.html', count: 30 },
                { id: 'nature_other', label: 'Other', url: 'nature_other.html', count: 42 }
            ]
        },
        {
            id: 'life',
            label: 'Life',
            url: 'life.html',
            children: [
                { id: 'people', label: 'People', url: 'people.html', count: 10 },
                {
                    id: 'happenings',
                    label: 'Happenings',
                    url: 'happenings.html',
                    children: [
                        { id: 'uc_strike', label: 'UC Strike', url: 'uc_strike.html', count: 20 }
                    ]
                }
            ]
        },
        {
            id: 'buildings',
            label: 'Buildings',
            url: 'buildings.html',
            children: [
                { id: 'buildings_inside', label: 'Inside', url: 'buildings_inside.html', count: 19 },
                { id: 'buildings_outside', label: 'Outside', url: 'buildings_outside.html', count: 10 }
            ]
        },
        {
            id: 'places',
            label: 'Places',
            url: 'places.html',
            children: [
                {
                    id: 'east_asia',
                    label: 'East Asia',
                    url: 'east_asia.html',
                    children: [
                        {
                            id: 'china',
                            label: 'China',
                            url: 'china.html',
                            children: [
                                { id: 'china2017', label: 'China - 2017', url: 'china2017.html', count: 36 },
                                { id: 'china2018', label: 'China - 2018', url: 'china2018.html', count: 65 }
                            ]
                        },
                        { id: 'taiwan', label: 'Taiwan', url: 'taiwan.html', count: 20 },
                        { id: 'japan', label: 'Japan', url: 'japan.html', count: 9 },
                        { id: 'singapore', label: 'Singapore', url: 'singapore.html', count: 11 }
                    ]
                },
                {
                    id: 'france',
                    label: 'France',
                    url: 'france.html',
                    children: [
                        { id: 'south_of_france', label: 'South of France', url: 'south_of_france.html', count: 30 },
                        { id: 'paris', label: 'Paris', url: 'paris.html', count: 27 }
                    ]
                },
                {
                    id: 'us',
                    label: 'United States',
                    url: 'us.html',
                    children: [
                        {
                            id: 'california',
                            label: 'California',
                            url: 'california.html',
                            children: [
                                {
                                    id: 'bay_area',
                                    label: 'Bay Area',
                                    url: 'bay_area.html',
                                    children: [
                                        { id: 'bay_area_2019', label: 'Bay Area - 2019', url: 'bay_area_2019.html', count: 16 },
                                        {
                                            id: 'berkeley',
                                            label: 'Berkeley',
                                            url: 'berkeley.html',
                                            children: [
                                                { id: 'berkeley_plants', label: 'Plants of Berkeley', url: 'berkeley_plants.html', count: 18 },
                                                { id: 'berkeley_backdrops', label: 'Berkeley Backdrops', url: 'berkeley_backdrops.html', count: 5 }
                                            ]
                                        }
                                    ]
                                },
                                { id: 'kings_canyon', label: 'Kings Canyon', url: 'kings_canyon.html', count: 23 },
                                { id: 'california_landscapes', label: 'Landscapes', url: 'california_landscapes.html', count: 8 },
                                { id: 'yosemite', label: 'Yosemite', url: 'yosemite.html', count: 24 }
                            ]
                        },
                        {
                            id: 'new_mexico',
                            label: 'New Mexico',
                            url: 'new_mexico.html',
                            children: [
                                { id: 'white_sands', label: 'White Sands', url: 'white_sands.html', count: 19 },
                                { id: 'white_sands_bw', label: 'B&W Sands', url: 'white_sands_bw.html', count: 16 },
                                { id: 'new_mexico_misc', label: 'Misc.', url: 'new_mexico_misc.html', count: 8 }
                            ]
                        },
                        {
                            id: 'new_york',
                            label: 'New York',
                            url: 'new_york.html',
                            children: [
                                { id: 'nyc', label: 'NYC', url: 'nyc.html', count: 13 },
                                { id: 'storm_king', label: 'Storm King', url: 'storm_king.html', count: 11 }
                            ]
                        },
                        { id: 'providence', label: 'Providence', url: 'providence.html', count: 16 },
                        { id: 'cities_other', label: 'Other', url: 'cities_other.html', count: 5 }
                    ]
                }
            ]
        },
        {
            id: 'concepts',
            label: 'Concepts',
            url: 'concepts.html',
            children: [
                { id: 'abstraction', label: 'Abstraction', url: 'abstraction.html', count: 14 },
                { id: 'colors', label: 'Colors', url: 'colors.html', count: 14 },
                { id: 'geometry', label: 'Geometry', url: 'geometry.html', count: 16 },
                { id: 'nostalgia', label: 'Nostalgia', url: 'nostalgia.html', count: 28 },
                { id: 'mirrors', label: 'Mirrors', url: 'mirrors.html', count: 8 },
                { id: 'a_visitor', label: 'A Visitor', url: 'a_visitor.html', count: 11 },
                { id: 'etc', label: 'Etc.', url: 'etc.html', count: 4 }
            ]
        }
    ]
};

// Calculate total photo count recursively
function calculateTotalCount(node) {
    if (node.count !== undefined) {
        return node.count;
    }
    if (node.children) {
        return node.children.reduce((sum, child) => sum + calculateTotalCount(child), 0);
    }
    return 0;
}

// Check if current page is in the path of a node
function isInActivePath(node, currentPageId, activePath = []) {
    if (node.id === currentPageId) {
        activePath.push(node.id);
        return true;
    }
    if (node.children) {
        for (let child of node.children) {
            if (isInActivePath(child, currentPageId, activePath)) {
                activePath.unshift(node.id);
                return true;
            }
        }
    }
    return false;
}

// Find a node by ID in the tree
function findNodeById(node, targetId) {
    if (node.id === targetId) {
        return node;
    }
    if (node.children) {
        for (let child of node.children) {
            const found = findNodeById(child, targetId);
            if (found) return found;
        }
    }
    return null;
}

// Check if a node is a leaf (has photos but no children)
function isLeafNode(node) {
    return node && node.count !== undefined && !node.children;
}

// Group nodes by depth level and track parent-child relationships
function groupNodesByDepth(node, depth = 0, depthMap = {}, parentMap = {}) {
    if (!depthMap[depth]) {
        depthMap[depth] = [];
    }
    
    depthMap[depth].push(node);
    
    if (node.children) {
        for (let child of node.children) {
            // Track parent ID for each child
            if (!parentMap[child.id]) {
                parentMap[child.id] = node.id;
            }
            groupNodesByDepth(child, depth + 1, depthMap, parentMap);
        }
    }
    
    return { depthMap, parentMap };
}

// Build a flat list of all nodes for quick lookups
function createNodeMap(node, nodeMap = {}) {
    nodeMap[node.id] = node;
    if (node.children) {
        for (let child of node.children) {
            createNodeMap(child, nodeMap);
        }
    }
    return nodeMap;
}

// Calculate the maximum label length for each depth level
function calculateColumnWidths(node, depth, columnWidths) {
    const totalCount = calculateTotalCount(node);
    const label = node.label + (totalCount > 0 ? ` (${totalCount})` : '');
    
    if (!columnWidths[depth] || label.length > columnWidths[depth]) {
        columnWidths[depth] = label.length;
    }
    
    if (node.children) {
        for (let child of node.children) {
            calculateColumnWidths(child, depth + 1, columnWidths);
        }
    }
}

// Build horizontal tree structure with grid positioning
function buildDepthRows(depthMap, currentPageId, activePathSet, parentMap, nodeMap) {
    const gap = 60; // pixels
    const html = buildGridTree(siteTree, currentPageId, activePathSet, 0, gap);
    return '<div class="nav-h-tree">' + html + '</div>';
}

// Build tree with grid-based positioning
// columnIndex: which column position this node should be at (0 for root, 1 for children, 2 for grandchildren, etc.)
function buildGridTree(node, currentPageId, activePathSet, columnIndex, gap) {
    let html = '';
    
    const totalCount = calculateTotalCount(node);
    const isActive = node.id === currentPageId;
    const isInPath = activePathSet.has(node.id);
    
    // Check if this node has been visited
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    const isVisited = visitedPages.includes(node.id) && !isActive;
    
    // Determine CSS class
    let className;
    if (isActive) {
        className = 'nav-active';
    } else if (isVisited) {
        className = 'nav-visited';
    } else if (isInPath) {
        className = 'nav-in-path';
    } else {
        className = 'nav-inactive';
    }
    
    const label = node.label + (totalCount > 0 ? ` (${totalCount})` : '');
    
    // Calculate left position for this column using viewport width units
    const leftPos = columnIndex * gap;
    
    // Render node row
    const leftPad = 'calc(50vw - 230px)'; // base left padding using viewport width
    html += '<div class="nav-h-grid-row" style="margin-left: calc(' + leftPad + ' + ' + leftPos + 'px);">';
    
    if (node.url) {
        html += `<a href="${node.url}" class="nav-h-node ${className}">${label}</a>`;
    } else {
        html += `<span class="nav-h-node ${className}">${label}</span>`;
    }
    
    html += '</div>';
    
    // If has children, process them
    if (node.children && node.children.length > 0) {
        // Add connector at same position as parent
        html += '<div class="nav-h-connector-line" style="margin-left: ' + leftPos + 'px;"> </div>';
        
        // Process all children
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            
            // Recursively render child at next column level
            const childHtml = buildGridTree(child, currentPageId, activePathSet, columnIndex + 1, gap);
            html += childHtml;
        }
    }
    
    return html;
}

// Initialize the navigator
function initNavigator(currentPageId) {
    const container = document.getElementById('site-navigator');
    if (!container) {
        console.error('Navigator container not found');
        return;
    }
    
    // Check if current page is a leaf node and add class
    const currentNode = findNodeById(siteTree, currentPageId);
    if (isLeafNode(currentNode)) {
        container.classList.add('leaf-page');
    }
    
    // Track this page as visited
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    if (!visitedPages.includes(currentPageId)) {
        visitedPages.push(currentPageId);
        localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    }
    
    // Find active path
    const activePath = [];
    isInActivePath(siteTree, currentPageId, activePath);
    const activePathSet = new Set(activePath);
    
    // Group nodes by depth and create lookup maps
    const { depthMap, parentMap } = groupNodesByDepth(siteTree);
    const nodeMap = createNodeMap(siteTree);
    
    // Build the tree HTML
    let html = '<div class="nav-header">';
    html += '<button id="nav-toggle" class="nav-toggle-btn">Show Photo Navigator</button>';
    html += '</div>';
    html += '<div id="nav-tree-content" class="nav-tree-content" style="display: none;">';
    html += '<div class="nav-tree">';
    html += buildDepthRows(depthMap, currentPageId, activePathSet, parentMap, nodeMap);
    html += '</div>';
    html += '</div>';
    
    container.innerHTML = html;
    
    // Add toggle functionality
    const toggleBtn = document.getElementById('nav-toggle');
    const treeContent = document.getElementById('nav-tree-content');
    
    // Get saved state from localStorage, default to false
    let isVisible = localStorage.getItem('navigatorOpen') === 'true';
    
    // Set initial display based on saved state
    if (isVisible) {
        treeContent.style.display = 'block';
        toggleBtn.textContent = 'Hide Photo Navigator';
    } else {
        treeContent.style.display = 'none';
        toggleBtn.textContent = 'Show Photo Navigator';
    }
    
    toggleBtn.addEventListener('click', function() {
        if (!isVisible) {
            treeContent.style.display = 'block';
            toggleBtn.textContent = 'Hide Photo Navigator';
        } else {
            treeContent.style.display = 'none';
            toggleBtn.textContent = 'Show Photo Navigator';
        }
        isVisible = !isVisible;

        // Save state to localStorage to persist across pages
        localStorage.setItem('navigatorOpen', isVisible);
    });
}
